import express from 'express'
import cors from 'cors'
import dns from 'dns'

const port = 64574
try {
  // Create Express application.
  const app = express()
  app.use(cors()) // tillåter alla origin, för utveckling
  app.use(express.json())

  // Function to validate email address format
  /**
   *
   * @param email
   */
  function validateEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(String(email).toLowerCase())
  }

  /**
   *
   * @param domain
   */
  async function validateDomain (domain) {
    return new Promise((resolve) => {
      console.log(domain)
      dns.resolveMx(domain, (err, address) => {
        if (err) {
          console.log('Lookup error: ', err)
          resolve(false)
        } else {
          resolve(true)
        }
      })
    })
  }

  app.post('/data', async (req, res) => {
    const email = req.body.email
    if (!validateEmail(email)) {
      console.log(2)
      return res.status(400).send('Invalid email address.')
    }
    const domain = email.split('@')[1] // extrahera domänen
    const domainValid = await validateDomain(domain)

    if (!domainValid) {
      return res.status(400).send('Domain does not exist or cannot receive emails.')
    }

    return res.status(200).send('Valid email address and domain exists.')
  })

  // Set up sessions
  if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
  }

  // Start server
  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    console.log('Press Ctrl-C to terminate...')
  })
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
