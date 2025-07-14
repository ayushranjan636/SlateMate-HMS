CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    contact_no VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hotel_name VARCHAR(255),
    location TEXT,
    pincode VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(100),
    number_of_rooms VARCHAR(50),
    early_customer BOOLEAN,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add an index to the email column for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
