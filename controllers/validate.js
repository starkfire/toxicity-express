const router = require('express').Router()

const toxicity = require('@tensorflow-models/toxicity')

const threshold = 0.9

router.post('/validate', (req, res) => {
    toxicity.load(threshold).then(model => {
        const text = req.body.text

        model.classify(text).then(predictions => {
            console.log(predictions)

            res.status(200).json({ message: predictions })
        }).catch(err => {
            console.log(err)

            res.status(500).json({ message: 'Server Error' })
        })
    })
})

module.exports = router