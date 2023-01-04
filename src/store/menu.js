let items = [{
        name: "Home",
        link: "#",
        icon: "",
        cmd: "home",
        submenu: []
    },

    {
        name: "Dropdawn menu",
        link: "#",
        icon: "",
        cmd: "",
        submenu: [{
                name: "Dashboard",
                link: "#",
                icon: "",
                cmd: "dashboard",
                submenu: []
            },
            {
                name: "Menu sub",
                link: "#",
                icon: "",
                cmd: "",
                submenu: [

                    {
                        name: "Overview",
                        link: "#",
                        icon: "",
                        cmd: "overview",
                        submenu: null
                    },
                    {
                        name: "MyDownloads",
                        link: "#",
                        icon: "",
                        cmd: "downloads",
                        submenu: null
                    },
                    {
                        name: "Billing",
                        link: "#",
                        icon: "",
                        cmd: "billing",
                        submenu: null
                    },
                    {
                        name: "Rewards",
                        link: "#",
                        icon: "",
                        cmd: "rewards",
                        submenu: null
                    },



                ]
            },
            {
                name: "Earnings",
                link: "#",
                icon: "",
                cmd: "earnings",
                submenu: []
            },
            {
                name: "---",
                link: "",
                icon: "",
                cmd: "",
                submenu: []
            },
            {
                name: "Sign out",
                link: "#",
                icon: "",
                cmd: "signout",
                submenu: []
            }

        ]
    },


    {
        name: "Services",
        link: "#",
        icon: "",
        cmd: "services",
        submenu: []
    },

    {
        name: "Pricing",
        link: "#",
        icon: "",
        cmd: "pricing",
        submenu: []
    },

    {
        name: "Contact",
        link: "#",
        icon: "",
        cmd: "contact",
        submenu: []
    },

]

let langs = [{
        name: "English (US)",
        link: "#",
        icon: "../assets/icons/en.svg",
        cmd: "en"
    },
    {
        name: "Deutsch (DE)",
        link: "#",
        icon: "../assets/icons/de.svg",
        cmd: "de"
    },
    {
        name: "Italiano (IT)",
        link: "#",
        icon: "../assets/icons/it.svg",
        cmd: "it"
    }


]

export {
    items,
    langs
}