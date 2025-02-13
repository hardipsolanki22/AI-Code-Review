import apiService from '../services/ai.service.js'

const reviewCode = async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400)
            .json({
                sucesss: false,
                data: null,
                message: 'Code is required'
            });
    }
    const response = await apiService(code)

    if (!response) {
        return res.status(500)
            .json({
                sucesss: false,
                data: null,
                message: 'Error on Gemini API'
            });

    }

    res.status(200)
        .json({
            sucesss: true,
            data: response,
            message: "AI Response Successfully"
        })

}

export {
    reviewCode
}