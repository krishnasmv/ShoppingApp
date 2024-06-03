

export default function FormicDemo(){
    const formik = useFormik({
        initialValues:{
            UserName: '',
            Password: '',
            City: '',
            Subscribe: true
        },
        onsubmit: values=>{
            alert(`${values.UserName}\nSubscription: ${(values.Subscribe)}`)
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleSubmit}/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleSubmit}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} >
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
            </form>
        </div>
    )
}