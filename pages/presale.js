import Help from "../components/help";
import InfoBar from "../components/infoBar";
import Brief from "../components/presale/brief";
import Form from "../components/presale/form";

export default function Presale() {
  return (
    <>
      <Brief />
      <Form />
      <InfoBar percent='50%' color='blue' result='Final Result' />
      <Help />
    </>
  )
}
