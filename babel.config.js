module.exports = {
    presets : [
        [
            "@babel/preset-env",
            {
                targets: {
                    "node": "6.9",
                    "esmodules": true
                },
                useBuiltIns: "usage",
                corejs: "3.0.0"
            } 
        ]
    ]
}