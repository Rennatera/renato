const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  console.log('📨 Recebido POST em /send');
  const { email, subject, message } = req.body;
  console.log('➡️ Dados recebidos:', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      text: `De: ${email}

${message}`,
    });

    console.log('✅ E-mail enviado com sucesso!');
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
