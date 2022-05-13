import './App.css';
import Copy from './components/ContributionForm';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import { EthersProvider } from './context/EthersContext';
;

function App() {
  return (
    <>
      <EthersProvider>
        <Layout>
          <Navbar />
          <Copy>
            <ProgressBar />
          </Copy>
        </Layout>
      </EthersProvider>
    </>
  )
}

export default App;
