import Learner_basic_details from "./components/Learner_basic_details";
import HCSP_certification_details from "./components/HCSP_certification_details";
import Search_results from "./components/Search_results";
import Header from "./components/Header";
function App() {
  return (
    <main>
      <Header />
      <Learner_basic_details />
      <HCSP_certification_details />
      <Search_results />
    </main>
  );
}

export default App;
