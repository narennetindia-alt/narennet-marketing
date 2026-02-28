const jwt = 'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZHBmendmd3V0cXByc211cGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODY5NjEsImV4cCI6MjA4Nzg2Mjk2MX0';
const payload = JSON.parse(Buffer.from(jwt, 'base64').toString());
process.stdout.write(payload.ref);
