# Read the file
$content = Get-Content "resources/js/lang/en.json" -Raw

# Remove the problematic empty lines that are causing merge conflicts
# These are the empty lines that appear after specific validation messages
$patterns = @(
    '"Got it": "Got it",\r?\n\r?\n',
    '"Fixed discount cannot exceed subtotal amount\.": "Fixed discount cannot exceed subtotal amount\.",\r?\n\r?\n',
    '"Please check your input and try again\.": "Please check your input and try again\.",\r?\n\r?\n',
    '"Please enter a valid note\.": "Please enter a valid note\.",\r?\n\r?\n',
    '"Please enter a valid note for the loan update\.": "Please enter a valid note for the loan update\.",\r?\n\r?\n',
    '"Sorry, couldn'\''t cancel this payment!": "Sorry, couldn'\''t cancel this payment!",\r?\n\r?\n',
    '"Cannot be changed when invoice is inactive": "Cannot be changed when invoice is inactive",\r?\n\r?\n',
    '"Please select a sub category": "Please select a sub category",\r?\n\r?\n'
)

foreach ($pattern in $patterns) {
    $content = $content -replace $pattern, ($pattern -replace '\r?\n\r?\n', "`r`n")
}

# Write the fixed content back
$content | Set-Content "resources/js/lang/en.json" -Encoding UTF8
Write-Host "Fixed merge conflicts in en.json"
