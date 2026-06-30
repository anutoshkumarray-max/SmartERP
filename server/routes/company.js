const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get Company Profile
router.get('/', async (req, res) => {
    try {
        const company = await prisma.company.findFirst();
        res.json(company || { message: "No company profile found" });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch company" });
    }
});

// Update/Create Company Profile
router.post('/', async (req, res) => {
    const { name, address, gstin, email, phone } = req.body;
    try {
        const company = await prisma.company.upsert({
            where: { id: 1 },
            update: { name, address, gstin, email, phone },
            create: { name, address, gstin, email, phone }
        });
        res.json(company);
    } catch (err) {
        res.status(400).json({ error: "Failed to update company profile" });
    }
});

module.exports = router;