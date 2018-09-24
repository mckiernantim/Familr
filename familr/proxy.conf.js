

const PROXY_CONFIG = [
    {
        context: [
            "/my",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://www.dnd5eapi.com/",
        secure: false
    }
]

module.exports = PROXY_CONFIG;