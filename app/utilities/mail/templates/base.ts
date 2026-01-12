export function baseTemplate({ title, body }: {
    title: string; body: string;
}) {
    return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>${title}</title>
    
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table {
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        table td {
            border-collapse: collapse;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            text-decoration: none;
        }
        
        /* Prevent WebKit and Windows mobile changing default text sizes */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        /* Remove extra space added to tables and cells in Outlook */
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Better fluid images */
        img {
            -ms-interpolation-mode: bicubic;
        }
        
        /* Prevent Windows 10 Mail from underlining links */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
        }
        
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            cursor: default;
            text-decoration: none;
        }
        
        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
            .dark-mode-bg {
                background-color: #1a1a1a !important;
            }
            .dark-mode-text {
                color: #ffffff !important;
            }
            .dark-mode-secondary-text {
                color: #cccccc !important;
            }
        }
        
        /* Mobile styles */
        @media only screen and (max-width: 600px) {
            .wrapper {
                width: 100% !important;
            }
            .content {
                padding: 20px !important;
            }
            .mobile-padding {
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
            .mobile-center {
                text-align: center !important;
            }
            .button {
                width: 100% !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; width: 100%; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    
    <!-- Preheader text (hidden but used by email clients) -->
    <div style="display: none; max-height: 0px; overflow: hidden;">
        Your preheader text goes here - this shows in inbox preview
    </div>
    
    <!-- Wrapper table for Outlook -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;" class="dark-mode-bg">
        <tr>
            <td style="padding: 40px 0;">
                
                <!-- Main container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);" class="wrapper dark-mode-bg">
                    
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 30px 40px; text-align: center; border-bottom: 1px solid #eeeeee;" class="mobile-padding">
                            <!-- Logo -->
                            <a href="https://yourwebsite.com" style="display: inline-block; text-decoration: none;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #4F46E5; letter-spacing: -0.5px;">Vionex</h1>
                            </a>
                        </td>
                    </tr>
                    
                    <!-- Main content -->
                    <tr>
                        <td class="content" style="padding: 40px;" class="mobile-padding">
                            
                            <!-- YOUR CONTENT GOES HERE -->
                            
                            ${body}
                            
                            <!-- END CONTENT -->
                            
                        </td>
                    </tr>
                    
                    <!-- Divider -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="border-top: 1px solid #eeeeee;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px;" class="mobile-padding">
                            
                            <!-- Social media icons -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 20px auto;">
                                <tr>
                                    <td style="padding: 0 8px;">
                                        <a href="https://twitter.com/yourcompany" target="_blank">
                                            <img src="https://via.placeholder.com/32/1DA1F2/ffffff?text=T" alt="Twitter" width="32" height="32" style="display: block; border: 0; border-radius: 50%;">
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="https://facebook.com/yourcompany" target="_blank">
                                            <img src="https://via.placeholder.com/32/1877F2/ffffff?text=F" alt="Facebook" width="32" height="32" style="display: block; border: 0; border-radius: 50%;">
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="https://linkedin.com/company/yourcompany" target="_blank">
                                            <img src="https://via.placeholder.com/32/0A66C2/ffffff?text=in" alt="LinkedIn" width="32" height="32" style="display: block; border: 0; border-radius: 50%;">
                                        </a>
                                    </td>
                                    <td style="padding: 0 8px;">
                                        <a href="https://instagram.com/yourcompany" target="_blank">
                                            <img src="https://via.placeholder.com/32/E4405F/ffffff?text=IG" alt="Instagram" width="32" height="32" style="display: block; border: 0; border-radius: 50%;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Footer text -->
                            <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #888888; text-align: center;" class="dark-mode-secondary-text">
                                © 2026 Your Company Name. All rights reserved.
                            </p>
                            
                            <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #888888; text-align: center;" class="dark-mode-secondary-text">
                                123 Your Street, Your City, ST 12345
                            </p>
                            
                            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #888888; text-align: center;" class="dark-mode-secondary-text">
                                <a href="https://yourwebsite.com/unsubscribe" style="color: #4F46E5; text-decoration: underline;">Unsubscribe</a> | 
                                <a href="https://yourwebsite.com/privacy" style="color: #4F46E5; text-decoration: underline;">Privacy Policy</a>
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                <!-- End main container -->
                
            </td>
        </tr>
    </table>
    <!-- End wrapper table -->
    
</body>
</html>
`;
}