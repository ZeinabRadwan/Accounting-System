# PowerShell script to resolve merge conflicts in en.json
$filePath = "resources/js/lang/en.json"
$content = Get-Content $filePath

# Remove empty lines that are causing conflicts
$filteredContent = @()
for ($i = 0; $i -lt $content.Length; $i++) {
    $line = $content[$i]
    
    # Skip empty lines that are causing conflicts
    if ($line.Trim() -eq "" -and (
        ($i -gt 0 -and $content[$i-1] -like '*"Got it": "Got it",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Fixed discount cannot exceed subtotal amount.": "Fixed discount cannot exceed subtotal amount.",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Please check your input and try again.": "Please check your input and try again.",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Please enter a valid note.": "Please enter a valid note.",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Please enter a valid note for the loan update.": "Please enter a valid note for the loan update.",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Sorry, couldn'\''t cancel this payment!": "Sorry, couldn'\''t cancel this payment!",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Cannot be changed when invoice is inactive": "Cannot be changed when invoice is inactive",*') -or
        ($i -gt 0 -and $content[$i-1] -like '*"Please select a sub category": "Please select a sub category",*')
    )) {
        continue
    }
    
    $filteredContent += $line
}

# Write the filtered content back to the file
$filteredContent | Set-Content $filePath -Encoding UTF8
Write-Host "Merge conflicts resolved in $filePath"
