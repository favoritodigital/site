'use client'

import { useEffect } from 'react'

export const FranchiseeForm = () => {
  useEffect(() => {
    const scriptId = '/scripts/bitrix-franchisee-form.js'

    if (document.getElementById(scriptId) != null) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = scriptId
    script.setAttributeNS(null, 'data-b24-form', 'inline/10/esgoms')
    script.setAttributeNS(null, 'data-skip-moving', 'true')
    script.defer = true

    const scriptDiv = document.getElementById('script_div')

    scriptDiv?.appendChild(script)

    return () => {
      scriptDiv?.removeChild(script)
    }
  }, [])

  return <div id='script_div' className={'w-full'} />
}
