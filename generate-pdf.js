const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF(url, outputPath, filename) {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--disable-gpu'
            ]
        });

        console.log('Creating new page...');
        const page = await browser.newPage();

        // Set viewport for consistent rendering
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 2
        });

        console.log(`Navigating to: ${url}`);
        await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for fonts and images to load
        await page.waitForTimeout(3000);

        // Inject additional CSS for better PDF rendering
        await page.addStyleTag({
            content: `
                @import url('https://unpkg.com/@abdulrysr/saudi-riyal-new-symbol-font/style.css');
                
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                
                .items-table {
                    width: 100% !important;
                    table-layout: fixed !important;
                    border-collapse: collapse !important;
                }
                
                .items-table th {
                    background: #10b981 !important;
                    color: #ffffff !important;
                    padding: 12px !important;
                }
                
                .items-table td {
                    padding: 12px !important;
                    border: 1px solid #e5e7eb !important;
                }
                
                .saudi-riyal {
                    font-family: SaudiRiyalSymbol, sans-serif !important;
                }
                
                body {
                    font-family: 'DejaVu Sans', Arial, sans-serif, SaudiRiyalSymbol !important;
                }
            `
        });

        // Wait for Saudi Riyal font to load
        await page.evaluate(() => {
            return new Promise((resolve) => {
                if (document.fonts && document.fonts.ready) {
                    document.fonts.ready.then(() => {
                        setTimeout(resolve, 1000);
                    });
                } else {
                    setTimeout(resolve, 2000);
                }
            });
        });

        // Hide the action buttons before generating PDF
        await page.evaluate(() => {
            const actionButtons = document.querySelector('.action-buttons');
            if (actionButtons) {
                actionButtons.style.display = 'none';
            }
            
            // Ensure proper table styling for PDF
            const tables = document.querySelectorAll('.items-table');
            tables.forEach(table => {
                table.style.width = '100%';
                table.style.tableLayout = 'fixed';
                table.style.borderCollapse = 'collapse';
            });
            
            // Ensure table headers have proper background
            const tableHeaders = document.querySelectorAll('.items-table th');
            tableHeaders.forEach(th => {
                th.style.backgroundColor = '#10b981';
                th.style.color = '#ffffff';
                th.style.padding = '12px';
            });
        });

        console.log('Generating PDF...');
        const pdf = await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '15mm',
                right: '15mm',
                bottom: '15mm',
                left: '15mm'
            },
            preferCSSPageSize: false,
            displayHeaderFooter: false,
            scale: 0.8
        });

        console.log(`PDF generated successfully: ${outputPath}`);
        await browser.close();
        
        return {
            success: true,
            filename: filename,
            path: outputPath
        };

    } catch (error) {
        console.error('Error generating PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
    console.error('Usage: node generate-pdf.js <url> <output_path> <filename>');
    process.exit(1);
}

const [url, outputPath, filename] = args;

// Create output directory if it doesn't exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Generate PDF
generatePDF(url, outputPath, filename)
    .then(result => {
        if (result.success) {
            console.log('PDF generation completed successfully');
            process.exit(0);
        } else {
            console.error('PDF generation failed:', result.error);
            process.exit(1);
        }
    })
    .catch(error => {
        console.error('Unexpected error:', error);
        process.exit(1);
    });
