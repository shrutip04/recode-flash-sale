import Navbar from "../components/Navbar";
import QueueStatus from "../components/QueueStatus";
import WaitingQueue from "../components/WaitingQueue";

function QueuePage(){

return(

<div>

<Navbar/>

<div className="flex gap-10 p-10">

<QueueStatus/>

<WaitingQueue/>

</div>

</div>

)

}

export default QueuePage;