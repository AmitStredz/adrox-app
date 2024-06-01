// import React from 'react'

// import { Helmet } from 'react-helmet'

// import './signup5.css'

// const Signup5 = (props) => {
//   return (
//     <div className="signup5-container">
//       <Helmet>
//         <title>exported project</title>
//       </Helmet>
//       <div className="signup5-signup5">
//         <div className="signup5-frame57"></div>
//         <div className="signup5-group92">
//           <div className="signup5-frame91">
//             <div className="signup5-frame71">
//               <span className="signup5-text">
//                 <span>
//                   Note down your
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Secret Recovery Phrase</span>
//               </span>
//               <span className="signup5-text04">
//                 <span>
//                   Please write down the 12-word Secret Recovery Phrase and store
//                   it in a secure location that only you can access.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//               </span>
//             </div>
//             <div className="signup5-group85">
//               <span className="signup5-text06">
//                 <span>Consider these tips:</span>
//               </span>
//               <div className="signup5-frame70">
//                 <div className="signup5-frame69">
//                   <span className="signup5-text08">
//                     <span>Save it in a password manager.</span>
//                   </span>
//                   <span className="signup5-text10">
//                     <span>Place it in a safe deposit box.</span>
//                   </span>
//                   <span className="signup5-text12">
//                     <span>
//                       Write it down and store copies in multiple confidential
//                       locations.
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="signup5-group91">
//             <button className="signup5-buttons">
//               <span className="signup5-text14">
//                 <span>Next</span>
//               </span>
//             </button>
//             <span className="signup5-text16">
//               <span>Copy to clipboard.</span>
//             </span>
//             <div className="signup5-group90">
//               <div className="signup5-group86"></div>
//               <div className="signup5-frame87">
//                 <div className="signup5-frame84">
//                   <div className="signup5-frame72">
//                     <span className="signup5-text18">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame73">
//                     <span className="signup5-text20">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame74">
//                     <span className="signup5-text22">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame75">
//                     <span className="signup5-text24">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="signup5-frame85">
//                   <div className="signup5-frame76">
//                     <span className="signup5-text26">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame77">
//                     <span className="signup5-text28">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame78">
//                     <span className="signup5-text30">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame79">
//                     <span className="signup5-text32">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="signup5-frame86">
//                   <div className="signup5-frame80">
//                     <span className="signup5-text34">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame81">
//                     <span className="signup5-text36">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame82">
//                     <span className="signup5-text38">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                   <div className="signup5-frame83">
//                     <span className="signup5-text40">
//                       <span>Simply </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img
//           src="/external/ellipse22357-ri4-1000w.png"
//           alt="Ellipse22357"
//           className="signup5-ellipse2"
//         />
//         <img
//           src="/external/ellipse32357-bmww-700w.png"
//           alt="Ellipse32357"
//           className="signup5-ellipse3"
//         />
//       </div>
//     </div>
//   )
// }

// export default Signup5

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useNavigate } from 'react-router-dom';
import './signup5.css';

const Signup5 = () => {
  const [recoveryPhrase, setRecoveryPhrase] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const phrase = JSON.parse(localStorage.getItem('recoveryPhrase'));
    if (phrase) {
      setRecoveryPhrase(phrase);
    } else {
      history('/signup4'); // Redirect to signup4 if no phrase found
    }
  }, [history]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(recoveryPhrase.join(' '));
    alert('Recovery phrase copied to clipboard!');
  };

  return (
    <div className="signup5-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="signup5-signup5">
        <div className="signup5-frame57"></div>
        <div className="signup5-group92">
          <div className="signup5-frame91">
            <div className="signup5-frame71">
              <span className="signup5-text">
                <span>
                  Note down your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Secret Recovery Phrase</span>
              </span>
              <span className="signup5-text04">
                <span>
                  Please write down the 12-word Secret Recovery Phrase and store
                  it in a secure location that only you can access.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="signup5-group85">
              <span className="signup5-text06">
                <span>Consider these tips:</span>
              </span>
              <div className="signup5-frame70">
                <div className="signup5-frame69">
                  <span className="signup5-text08">
                    <span>Save it in a password manager.</span>
                  </span>
                  <span className="signup5-text10">
                    <span>Place it in a safe deposit box.</span>
                  </span>
                  <span className="signup5-text12">
                    <span>
                      Write it down and store copies in multiple confidential
                      locations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="signup5-group91">
            <button className="signup5-buttons" onClick={() => history.push('/nextpage')}>
              <span className="signup5-text14">
                <span>Next</span>
              </span>
            </button>
            <span className="signup5-text16" onClick={handleCopyToClipboard}>
              <span>Copy to clipboard.</span>
            </span>
            <div className="signup5-group90">
              <div className="signup5-group86"></div>
              <div className="signup5-frame87">
                <div className="signup5-phrase-grid">
                  {recoveryPhrase.map((word, index) => (
                    <div key={index} className="signup5-phrase-item">
                      <span className="signup5-text18">
                        <span>{word}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/external/ellipse22357-ri4-1000w.png"
          alt="Ellipse22357" 
          className="signup5-ellipse2"
        />
        <img
          src="/external/ellipse32357-bmww-700w.png"
          alt="Ellipse32357"
          className="signup5-ellipse3"
        />
      </div>
    </div>
  );
};

export default Signup5;


