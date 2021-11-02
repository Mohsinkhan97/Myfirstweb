import React,{useState} from 'react';
import Modal from 'react-modal';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Popup() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <>
    <div onClick={() =>setmodalIsOpen(true)} style={{cursor:'pointer',display:'flex',color:'#344767',paddingTop:'4px'}}>
    <PersonAddAlt1OutlinedIcon>
    </PersonAddAlt1OutlinedIcon>
    <p>Signin</p>
    </div>
    <Modal isOpen={modalIsOpen} onRequestClose={()=>setmodalIsOpen(false)}>
<form>
<CloseOutlinedIcon onClick={() =>setmodalIsOpen(false)}style={{cursor:'pointer',display:'flex',position:'absolute',right:'0',top:'0'}}></CloseOutlinedIcon>
      <div className="userdiv">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required></input>
      </div>

      <div className="passdiv">
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
      </div>

      <div className="logindiv">
      <button type="submit">Login</button>
      </div>

      <div>
      <label>
        <input type="checkbox" checked="checked" name="remember"></input> Remember me
      </label>
      <span style={{paddingLeft:'150px'}}>Forgot <a href="#">password?</a></span>
      </div>
      
</form>
<div></div>
    </Modal>
    </>
  );
}
export default Popup;