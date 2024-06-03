import { useState } from "react"
export default function FormComponent(){

    const [users] = useState([
        {UserId:'john'},
        {UserId:'john1'},
        {UserId:'john2'},
        {UserId:'john3'},
        {UserId:'john4'},
    ]);

    function VerifyUserID(e){
        for(var user of users)
            {
                if(user.UserId == e.target.value){
                    setUserMsg("User Id Taken - Try Another");
                    setUserValid(false);
                    break;
                }
                else{
                    setUserMsg('User Id Available');
                    setUserValid(true);
                }
            }

    }
    function HideUserMsg(e){
        if(e.target.value==""){
            setUserMsg('User Id Required');
        }
        else{
            setUserMsg('');
        }

    }
    function HidePwdMsg(){
        setPwdMsg('');
        setCapsStatus(false);
    }
    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPwdMsg('Strong Password');
        }
        else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password');
            }else{
                setPwdMsg('weak Password');
            }
        }
    }
    function VerifyCaps(e){
        if((e.keyCode>=65 && e.keyCode<=90) || (e.which>=65 && e.which<=90)){
            setCapsStatus(true);
        }
        else{
            setCapsStatus(false);
        }
    }
    function VerifyCity(e){
        if(e.target.value = 'notcity'){
            setCityMsg('please select a city');
        }
        else{
            setCityMsg('');
        }

    }
    function HandlePwdChange(e){
        setUserDetails({
            UserId: userDetails.UserId,
            Password: e.target.value,
            city: userDetails.city
        })

    }
    function HandleUserChange(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password,
            city:userDetails.city
        })
    }
    function HandleCityChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:userDetails.Password,
            city:e.target.value
        })
    }
    function RegisterClick(){
        alert(JSON.stringify(userDetails) )
    }
    const [userDetails, setUserDetails]= useState({userId:'',Password:'',city:''});
    const [cityMsg, setCityMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid]=useState(false);
    return(
        <div className="container-fluid">
            <h2> Register User</h2>
            <dl>
                <dt>User Id </dt>
                <dd><input onChange={HandleUserChange} type="text" onBlur={HideUserMsg} onKeyUp={VerifyUserID}/></dd>
                <dd className={(isUserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
                <dd>
                    <input type="password" onChange={HandlePwdChange} onKeyPress={VerifyCaps} onBlur={HidePwdMsg} onKeyUp={VerifyPassword}/>
                </dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus==true)?'d-block':'d-none'}>
                    <span className="text-warning" ><span className="bi bi-exclamation-triangle"></span> Caps On</span>
                </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity} >
                        <option value="notcity">Select your city</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>
            </dl>
            <button onClick={RegisterClick}>Register</button>
        </div>
    )
}