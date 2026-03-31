
export default function Header(){
   
    return(
        <form>
        <header>
         <div> 
            
            {/* <table>  */}
       <tr>
        <td>FIRST NAME</td>
        <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
      </tr>
      <tr>
        <td>LAST NAME</td>
        <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
      </tr>
      <tr >
        <td>DATE OF BIRTH</td>
        <td><select name="DAY"> DAY
          <option>Day </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option> 
        </select>

        <select name="Month">
          <option>Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select name="Year" >
          <option>Year</option>
         <option>2001</option>
         <option>2002</option>
         <option>2003</option>
         <option>2004</option>
         <option>2005</option>
         <option>2006</option>
         <option>2007</option>
         <option>2008</option>
         <option>2009</option>
         <option>2010</option>
         <option>2011</option>
         <option>2012</option> 
        </select>
        </td>
      </tr>
{/* </table> */}

         </div>
        </header>
        </form> 

    );
}