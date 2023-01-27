// Task 1
const mainEl = document.querySelector('main')
mainEl.style.background = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')

// Task 2
const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = "100%"
topMenuEl.style.background = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// Task 3
// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

menuLinks.forEach((el, i) => {
    const link = document.createElement('a')
    link.setAttribute('href', el.href)
    if (el.subLinks) {
        link.setAttribute('sublinks', el.subLinks)
    }
    link.innerText = el.text
    topMenuEl.appendChild(link)
})

// Task 4
const subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.background = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Task 5
let showingSubMenu = false
let topMenuLinks = document.querySelectorAll('#top-menu > a')

topMenuEl.addEventListener('click', function (event) {
    event.preventDefault()
    // console.log("ACTIVE CHECK", event.target.classList.contains('active'))
    if (event.target.tagName.toLowerCase() !== 'a') {
        return
    }
    else if (event.target.classList.contains('active')) {
        event.target.classList.remove('active')
        showingSubMenu = false
        subMenuEl.style.top = '0'
        return
    }
    //Task 5.4
    topMenuLinks.forEach(function (el) {
        el.classList.remove('active')
    })
    //Task 5.5
    event.target.classList.add('active')
    // console.log("this is target object", event.target.classList.contains('active'))
    //Task 5.6
    if (event.target.hasAttribute('subLinks')) {
        showingSubMenu = true
    } else {
        showingSubMenu = false
    }
    //Task 5.7
    let targetName = event.target.innerText.toLowerCase()
    console.log(targetName)
    let subLinksArray
    menuLinks.forEach((el) => {
        if (el.text === targetName) {
            console.log(targetName, el.text)
            subLinksArray = el.subLinks
        }
    })
    console.log("this is SUBLINK ARRAY:", subLinksArray)


    if (showingSubMenu) {
        subMenuEl.style.top = '100%'
        buildSubMenu(subLinksArray)

    } else {
        subMenuEl.style.top = '0'
        mainEl.innerHTML = '<h1>about</h1>'
    }

})
// Task 5.8
function buildSubMenu(arr) {
    subMenuEl.innerHTML = ''
    arr.forEach(function (el) {
        const subLink = document.createElement('a')
        subLink.setAttribute('href', el.href)
        subLink.innerText = el.text
        subMenuEl.appendChild(subLink)

    })
}

let subMenuLinks = document.querySelectorAll('#sub-menu > a')
// Task 6.0
subMenuEl.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.tagName.toLowerCase() !== 'a') {
        return
    }
    console.log(event.target.textContent)
    // Task 6.1
    showingSubMenu = false
    subMenuEl.style.top = '0'
    // Task 6.2
    topMenuLinks.forEach(function (el) {
        el.classList.remove('active')
    })
    // Task 6.3
    mainEl.innerHTML = `<h1>${event.target.innerText.toLowerCase()}</h1>`
})