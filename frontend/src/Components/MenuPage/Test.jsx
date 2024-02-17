// const navigate = useNavigate()
//   const [selected, setSelected] = useState(false)
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
//   })

//   const { storeToken } = useAuth()

//   const handleInput = (e) => {
//     let name = e.target.name
//     let value = e.target.value
//     setUser({
//       ...user,
//       [name]: value
//     })
//   }

//   const handlePassword = () => {
//     setSelected(!selected)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch(http://localhost:5000/api/auth/register, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user)
//       })
//       const data = await response.json()
//       if (response.ok) {
//         storeToken(data.token)
//         setUser({
//           username: "",
//           email: "",
//           phone: "",
//           password: ""
//         })
//         toast.success("Registered Successfully.", {
//           position: "top-right",
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         })
//         navigate("/")
//       }
//       else {
//         {
//           data.extraDetails ? toast.error(data.extraDetails, {
//             position: "top-right",
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           }) : toast.error(data.message, {
//             position: "top-right",
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           })
//         }
//       }
//     } catch (error) {
//       toast.error(error, {
//         position: "top-right",
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       })
//     }
//   }