function useLocalStorage() {
    const setItem = (name, value) => {
        localStorage.setItem(name, value)
    }

    const removeItem = (name) => {
        localStorage.removeItem(name)
    }

    const getItem = (name) => {
        return localStorage.getItem(name)
    }
    return { getItem, removeItem, setItem }
}

export default useLocalStorage