import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function save_image() {
  const [image, setImage] = useState(null)
  
  // ใช้ในการเปลี่ยนหน้า
  const history = useNavigate()

  const saveImage = async (e) => {
    e.preventDefault()

    if (image === null) {
      alert('Please choose image')
      return
    }

    const formData = new FormData()
    formData.append('image', image)

    await axios
      .post('http://localhost:8000/api/image/save', formData)
      .then((res) => {
        console.log(res)
        alert('Image saved successfully')
        history(`/show_image/${res.data.data.id}`)
      }
    )
  }
  
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button
        onClick={saveImage}
      >
        Save Image
      </button>
    </div>
    )
}
