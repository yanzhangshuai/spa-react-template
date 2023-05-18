import { useDebounceFn, useLocalStorageState, useMount, useToggle } from 'ahooks'
import { useEffect } from 'react'

export default function ThemeChange() {
  const [dark, { toggle, set }] = useToggle(false)

  const [themeStorage, setThemeStorage] = useLocalStorageState('theme', {
    defaultValue: 'def'
  })

  useMount(() => {
    set(themeStorage !== 'def')
  })

  useEffect(() => {
    setThemeStorage(dark ? 'dark' : 'def')

    const classList = document.body.classList

    if (dark)
      classList.add('dark')
    else
      classList.remove('dark')
  }, [dark])

  const { run: onThemeChange } = useDebounceFn(() => {
    toggle()
  }, { wait: 300 })

  return (
        <>
        <button className="btn" onClick={onThemeChange}>更换{ dark ? '亮色' : '暗黑' }主题</button>
        </>
  )
}
