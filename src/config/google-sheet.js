import { google } from 'googleapis';
import dotenv from 'dotenv'

dotenv.config()

const proc = process.env

export const SHEET_ID = proc.SHEET_ID

const auth = new google.auth.GoogleAuth({
    credentials: {
        type: proc.TYPE,
        project_id: proc.PROJECT_ID,
        private_key_id: proc.PRIVATE_KEY_ID,
        private_key: proc.PRIVATE_KEY,
        client_email: proc.CLIENT_EMAIL,
        client_id: proc.CLIENT_ID,
        auth_uri: proc.AUTH_URI,
        token_uri: proc.TOKEN_URI,
        auth_provider_x509_cert_url: proc.AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: proc.CLIENT_X509_CERT_URL,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']

});

const sheets = google.sheets({
    version: 'v4',
    auth,
});

export default sheets;
