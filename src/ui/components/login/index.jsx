'use client'

import axios from 'axios'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Eye, EyeOff, X, ArrowRight } from 'lucide-react'

// contraseña con al menos 8 caracteres, una mayúscula, una minúscula y un número y simbolos
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/

const errorMessage = (error) => {
  switch (error) {
    case 'user_not_found':
      return 'Usuario no encontrado'
    case 'user_already_exists':
      return 'El usuario ya existe'
    case 'invalid_password':
      return 'Contraseña incorrecta'
    default:
      return 'Error al iniciar sesión'
  }
}

export const LoginComponent = () => {
  const [show, setShow] = React.useState(false)
  const [isNewUser, setIsNewUser] = React.useState(false)
  const [file, setFile] = React.useState(false)
  const [error, setError] = React.useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')

    if (!regexPassword.test(password) && isNewUser) {
      return setError(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.'
      )
    }

    const uri = isNewUser ? '/api/auth/sign-up' : '/api/auth/sign-in'
    try {
      let profile = null

      if (file && isNewUser) {
        const url = 'https://api.cloudinary.com/v1_1/dc0t90ahb/upload'
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'ztmbixcz')
        formData.append('folder', 'tourism')

        const res = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        profile = res.data.secure_url
      }

      await axios.post(uri, {
        name,
        email,
        password,
        profile
      })
      window.location.reload()
    } catch (error) {
      const code = error.response.data.error

      if (code === 'user_not_found') {
        setIsNewUser(true)
      }

      setError(errorMessage(code))
    }
  }

  const { open: openDialogFile } = useDropzone({
    onDropAccepted: (files) => {
      const file = files[0]
      setFile(file)
    },
    accept: {
      'image/png': 'image/png',
      'image/jpeg': 'image/jpeg',
      'image/jpg': 'image/jpg'
    }
  })

  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-3xl tracking-tight font-serif">
          {isNewUser ? 'Regístrate' : 'Inicia Sesión'}
        </h1>
        <p className="text-center">
          {isNewUser ? 'Crea una cuenta' : 'Ingresa'} para disfrutar de todas
          las funcionalidades de la plataforma.
        </p>
      </div>
      <div className="p-2 pt-0">
        <form onSubmit={onSubmit} className="grid gap-5">
          {isNewUser && (
            <>
              <div className="flex items-center justify-center">
                <div
                  onClick={openDialogFile}
                  className="w-36 cursor-pointer overflow-hidden aspect-square rounded-full border hover:border-stone-300 bg-stone-100"
                >
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="profile"
                      className="object-cover rounded-full w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full grid place-content-center">
                      <X size={25} className="rotate-45 opacity-50" />
                    </div>
                  )}
                </div>
              </div>
              <input
                name="name"
                required
                type="text"
                placeholder="Nombre"
                className="bg-transparent border rounded-xl font-medium placeholder:text-stone-400 border-stone-400 p-4 px-5 w-full"
              />
            </>
          )}
          <input
            required
            autoFocus
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className="bg-transparent border rounded-xl font-medium placeholder:text-stone-400 border-stone-400 p-4 px-5 w-full"
          />
          <div className="relative">
            <input
              required
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Contraseña"
              className="bg-transparent border rounded-xl font-medium placeholder:text-stone-400 border-stone-400 p-4 px-5 w-full"
            />
            <div className="absolute right-4 inset-y-0 flex items-center">
              <button type="button" onClick={() => setShow(!show)}>
                {show ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-stone-800 text-xs font-medium">{error}</p>
          )}
          <button className="w-full flex items-center justify-center gap-3 group bg-stone-800 rounded-xl text-lg p-4 font-serif text-stone-300">
            {isNewUser ? 'Regístrate' : 'Iniciar Sesión'}
            <ArrowRight
              className="group-hover:translate-x-3 transition-transform"
              size={20}
            />
          </button>
        </form>
      </div>
    </>
  )
}
