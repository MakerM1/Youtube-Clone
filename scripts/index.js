function closeSideBar() {
    const sidebar = document.querySelector('.js-sidebar')
    const body = document.querySelector('.js-body')

    if (sidebar.classList.contains('sidebar')) {
        sidebar.classList.add('no-sidebar')
        body.classList.add('no-sidebar-body')
        body.classList.remove('body-open')
        sidebar.classList.remove('sidebar')
    } else {
        sidebar.classList.add('sidebar')
        sidebar.classList.remove('no-sidebar')
        body.classList.remove('no-sidebar-body')
        body.classList.add('body-open')
    }
}

function openMenu() {
    const menu = document.querySelector('.js-menu')

    if (menu.classList.contains('pfp-menu-close')) {
        menu.classList.remove('pfp-menu-close')
        menu.classList.add('pfp-menu-open')
    } else if (menu.classList.contains('pfp-menu-open')) {
        menu.classList.remove('pfp-menu-open')
        menu.classList.add('pfp-menu-close')
    }
}