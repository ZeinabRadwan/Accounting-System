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

        // Wait for any dynamic content to load
        await page.waitForTimeout(2000);

        // Hide the action buttons before generating PDF
        await page.evaluate(() => {
            const actionButtons = document.querySelector('.action-buttons');
            if (actionButtons) {
                actionButtons.style.display = 'none';
            }
        });

        console.log('Generating PDF...');
        const pdf = await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm'
            },
            preferCSSPageSize: true,
            displayHeaderFooter: false
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
