import { useState } from "react";
import ClientDetails from "./components_created/ClientDetails";
import Dates from "./components_created/Dates";
import Footer from "./components_created/Footer";
import Header from "./components_created/Header";
import Maindetails from "./components_created/Maindetails";
import Notes from "./components_created/Notes";
import Table from "./components_created/Table";


function App() {
  const[showInvoice, setShowInvoice] = useState(false)
  const [name, setName] =useState("")
  const [address, setAdress] =useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [bankname, seBankName] =useState("")
  const [bankaccount, setBankAccount] =useState("")
  const [website, setWebsites] =useState("")
  const [clientName, setClientName] =useState("")
  const [clientAddress, setClientAddress] =useState("")
  const [invoiceNumber, setInvoiceNumber] =useState("")
  const [InvoiceDate, setInvoiceDate] =useState("")
  const [duedate, setDueDate] =useState("")
  const [notes, setNotes] =useState("")


  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {showInvoice ? <div>

<Header handlerPrint={handlePrint}/> 

<Maindetails />

<ClientDetails />

<Dates />

<Table />

<Notes />
<Footer />
<button onClick={() => setShowInvoice(false)} className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
    border-2 border-blue-500 hover:bg-transparent 
    hover:text-blue-500 
    transition-all duration-300">Edit Information</button>
</div>
    : ( 
  <>
  <div className="flex flex-col justify-center ">
  <input
  type="text"
   name="text" 
   id="text"
    placeholder=" Enter Your Name"
    autoComplete="off" 
    />
    <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
    border-2 border-blue-500 hover:bg-transparent 
    hover:text-blue-500 
    transition-all duration-300">Preview Invoice</button>
    </div>
  </>
)}
    </main>
    </>
   
  )
}

export default App
