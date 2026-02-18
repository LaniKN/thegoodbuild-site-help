
export function useScrollToBuilds() {
    const builds = document.getElementById('builds-section');
    window.scrollTo({
        top: builds?.offsetTop,
        behavior: 'smooth',
    })
}