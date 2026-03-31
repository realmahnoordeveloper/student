export default function Head(){
   
    return(
        <form action="">
        <header>
         <div>
 <tr>
        <td>EMAIL ID</td>
        <td><input type="email"/></td>
      </tr>
       <tr>
        <td>MOBILE NUMBER</td>
        <td><input type="text"/>(10 digit number)</td>
      </tr>
       <tr>
        <td>GENDER</td>
        <td>Male<input type="radio"/>Female <input type="radio"/></td>
      </tr>
      <tr>
        <td>ADDRESS</td>
        <td><textarea cols="30" rows="5" placeholder=""/></td>
      </tr>
       <tr>
        <td>CITY</td>
        <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
      </tr>
       <tr>
        <td>PIN CODE</td>
        <td><input type="text"/>(6 digit number)</td>
      </tr>
       <tr>
        <td>STATE</td>
        <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
      </tr>
       <tr>
        <td>COUNTRY</td>
        <td><input type="text"/></td>
      </tr>

         </div>
        </header>
</form>
    );
}