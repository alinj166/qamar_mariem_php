<?php
declare(strict_types=1);

/*
 * CONFIGURATION À FAIRE AVANT LA MISE EN LIGNE
 * 1. Remplacez QUOTE_RECIPIENT par l'adresse qui doit recevoir les demandes.
 * 2. MAIL_FROM doit utiliser une adresse appartenant à votre domaine lorsque possible.
 * 3. mail() ne fonctionne pas toujours sur XAMPP sans configurer sendmail/SMTP.
 */
define('QUOTE_RECIPIENT', 'CHANGE_ME@example.com');
define('MAIL_FROM', 'website@example.com');

// CONTACT — remplacez ces valeurs avant publication. Numéro WhatsApp au format international, chiffres uniquement (ex. 216XXXXXXXX).
define('CONTACT_PHONE', '+216 XX XXX XXX');
define('WHATSAPP_NUMBER', '216XXXXXXXX');
