# Quicker Campaign Builder README

## Overview

The Quicker Campaign Builder is a simple, yet powerful tool designed to help marketing professionals and campaign managers quickly generate campaign-specific URLs with tracking parameters. This tool is especially useful for creating URLs for social media posts, email marketing, and other digital marketing efforts, allowing for effective tracking and analytics.

## Features

- **URL and Date Input:** Users can input the base URL and the date for the campaign.
- **Automatic Source Tagging:** Based on the URL's domain, the tool automatically assigns a source tag from a predefined list.
- **Campaign Tagging:** Utilizes URL parameters or pathname to generate a campaign tag, incorporating the specified date for easy tracking.
- **Easy Copy Functionality:** With a single click, users can copy the generated URL to their clipboard.

## Usage

1. **Enter the URL:** In the 'URL' input field, enter the full URL you wish to use for your campaign.
2. **Select the Date:** Choose the month and year for your campaign using the 'Date' input.
3. **Generate URL:** Click the 'Generate URL' button to create your custom tracking URL.
4. **Copy URL:** Use the 'Copy' button to copy the generated URL to your clipboard for use in your campaign materials.

## How It Works

The tool parses the entered URL to identify the domain and applies predefined source tags and rulesets to generate a unique UTM-tagged URL. The campaign parameter is crafted by combining elements from the URL with the specified date, ensuring each campaign URL is unique and trackable.

## Customization

The `sources` and `rulesets` objects within the script can be modified to accommodate different domains and tagging strategies. This allows for the tool to be tailored to specific marketing needs and campaign structures.

## CSS Styling

The included CSS file (`styles.css`) ensures a clean, user-friendly interface. The styling can be customized to match your branding or preferences.

## Integration

The Quicker Campaign Builder can be easily integrated into your web projects or marketing tools, requiring only basic HTML and JavaScript knowledge for implementation.

## Conclusion

This tool streamlines the process of creating campaign-specific URLs with tracking parameters, making it an invaluable asset for efficient digital marketing campaign management.
