import React, { useState } from "react";





function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

    const handleAcceptClick = () => {
      if (isChecked) {
        alert("You have accepted terms and conditions.");
      }
    };

    const handleCancelClick = () => {
      alert("Action cancelled.");
    };

  return (
    <div className="p-5 md:p-10 mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl my-3">
        Welcome to SiliconVerse
      </h1>
      <p className="text-sm md:text-base">
        This site is provided as a service to our visitors and may be used for
        informational purposes only. Because the Terms and Conditions contain
        legal obligations, please read them carefully.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        1. YOUR AGREEMENT
      </h2>
      <p className="text-sm md:text-base">
        By using this Site, you agree to be bound by, and to comply with, these
        Terms and Conditions. If you do not agree to these Terms and Conditions,
        please do not use this site. <strong>PLEASE NOTE:</strong> We reserve
        the right, at our sole discretion, to change, modify or otherwise alter
        these Terms and Conditions at any time. Unless otherwise indicated,
        amendments will become effective immediately. Please review these Terms
        and Conditions periodically. Your continued use of the Site following
        the posting of changes and/or modifications will constitute your
        acceptance of the revised Terms and Conditions and the reasonableness of
        these standards for notice of changes. For your information, this page
        was last updated as of the date at the top of these terms and
        conditions.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">2. PRIVACY</h2>
      <p className="text-sm md:text-base">
        Please review our Privacy Policy, which also governs your visit to this
        Site, to understand our practices.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">3. LINKED SITES</h2>
      <p className="text-sm md:text-base">
        This Site may contain links to other independent third-party Web sites
        ("Linked Sites”). These Linked Sites are provided solely as a
        convenience to our visitors. Such Linked Sites are not under our
        control, and we are not responsible for and do not endorse the content
        of such Linked Sites, including any information or materials contained
        on such Linked Sites. You will need to make your own independent
        judgment regarding your interaction with these Linked Sites.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        4. FORWARD LOOKING STATEMENTS
      </h2>
      <p className="text-sm md:text-base">
        All materials reproduced on this site speak as of the original date of
        publication or filing. The fact that a document is available on this
        site does not mean that the information contained in such document has
        not been modified or superseded by events or by a subsequent document or
        filing. We have no duty or policy to update any information or
        statements contained on this site and, therefore, such information or
        statements should not be relied upon as being current as of the date you
        access this site.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
      </h2>
      <h3 className="font-semibold py-1">A. Disclaimer of Warranties</h3>
      <p className="text-sm md:text-base">
        This Site may contain inaccuracies and typographical errors. We do not
        warrant the accuracy or completeness of the materials or the reliability
        of any advice, opinion, statement or other information displayed or
        distributed through the Site. You expressly understand and agree that:
      </p>
      <ul className="flex flex-col gap-2 md:ml-4 text-sm md:text-base">
        <li>
          (i) Your use of the Site, including any reliance on any such opinion,
          advice, statement, memorandum, or information contained herein, shall
          be at your sole risk;
        </li>
        <li>
          (ii) The Site is provided on an "AS IS" and "AS AVAILABLE" basis;
        </li>
        <li>
          (iii) Except as expressly provided herein we disclaim all warranties
          of any kind, whether express or implied, including, but not limited to
          implied warranties of merchantability, fitness for a particular
          purpose, workmanlike effort, title and non-infringement;
        </li>
        <li>
          (iv) We make no warranty with respect to the results that may be
          obtained from this Site, the products or services advertised or
          offered or merchants involved;
        </li>
        <li>
          (v) Any material downloaded or otherwise obtained through the use of
          the Site is done at your own discretion and risk; and
        </li>
        <li>
          (vi) You will be solely responsible for any damage to your computer
          system or for any loss of data that results from the download of any
          such material.
        </li>
      </ul>
      <h3 className="font-semibold py-1">B. Limitation of Liability</h3>
      <p className="text-sm md:text-base">
        You understand and agree that under no circumstances, including, but not
        limited to, negligence, shall we be liable for any direct, indirect,
        incidental, special, punitive or consequential damages that result from
        the use of, or the inability to use, any of our sites or materials or
        functions on any such site, even if we have been advised of the
        possibility of such damages. The foregoing limitations shall apply
        notwithstanding any failure of essential purpose of any limited remedy.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        6. EXCLUSIONS AND LIMITATIONS
      </h2>
      <p className="text-sm md:text-base">
        Some jurisdictions do not allow the exclusion of certain warranties or
        the limitation or exclusion of liability for incidental or consequential
        damages. Accordingly, our liability in such jurisdiction shall be
        limited to the maximum extent permitted by law.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        7. OUR PROPRIETARY RIGHTS
      </h2>
      <p className="text-sm md:text-base">
        This Site and all its Contents are intended solely for personal,
        non-commercial use. Except as expressly provided, nothing within the
        Site shall be construed as conferring any license under our or any third
        party's intellectual property rights, whether by estoppel, implication,
        waiver, or otherwise. Without limiting the generality of the foregoing,
        you acknowledge and agree that all content available through and used to
        operate the Site and its services is protected by copyright, trademark,
        patent, or other proprietary rights. You agree not to:
      </p>
      <ul className="flex flex-col gap-2 md:ml-4 text-sm md:text-base">
        <li>
          (a) Modify, alter, or deface any of the trademarks, service marks,
          trade dress (collectively "Trademarks") or other intellectual property
          made available by us in connection with the Site;
        </li>
        <li>
          (b) Hold yourself out as in any way sponsored by, affiliated with, or
          endorsed by us, or any of our affiliates or service providers;
        </li>
        <li>
          (c) Use any of the Trademarks or other content accessible through the
          Site for any purpose other than the purpose for which we have made it
          available to you;
        </li>
        <li>
          (d) Defame or disparage us, our Trademarks, or any aspect of the Site;
          and
        </li>
        <li>
          (e) Adapt, translate, modify, decompile, disassemble, or reverse
          engineer the Site or any software or programs used in connection with
          it or its products and services. The framing, mirroring, scraping or
          data mining of the Site or any of its content in any form and by any
          method is expressly prohibited.
        </li>
      </ul>
      <h2 className="font-semibold text-lg md:text-xl py-2">8. INDEMNITY</h2>
      <p className="text-sm md:text-base">
        By using the Site web sites you agree to indemnify us and affiliated
        entities (collectively "Indemnities") and hold them harmless from any
        and all claims and expenses, including (without limitation) attorney's
        fees, arising from your use of the Site web sites, your use of the
        Products and Services, or your submission of ideas and/or related
        materials to us or from any person's use of any ID, membership or
        password you maintain with any portion of the Site, regardless of
        whether such use is authorized by you.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        9. COPYRIGHT AND TRADEMARK NOTICE
      </h2>
      <p className="text-sm md:text-base">
        Except our generated dummy copy, which is free to use for private and
        commercial use, all other text is copyrighted.
        generator.lorem-ipsum.info © 2013, all rights reserved
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">
        10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS
      </h2>
      <p className="text-sm md:text-base">
        It is our policy to respond expeditiously to claims of intellectual
        property infringement. We will promptly process and investigate notices
        of alleged infringement and will take appropriate actions under the
        Digital Millennium Copyright Act ("DMCA") and other applicable
        intellectual property laws. Notices of claimed infringement should be
        directed to:
      </p>
      {/* <address>
        generator.lorem-ipsum.info
        <br />
        126 Electricov St.
        <br />
        Kiev, Kiev 04176 Ukraine
        <br />
        <a href="mailto:contact@lorem-ipsum.info">contact@lorem-ipsum.info</a>
      </address> */}
      <h2 className="font-semibold text-lg md:text-xl py-2">
        11. PLACE OF PERFORMANCE
      </h2>
      <p className="text-sm md:text-base">
        This Site is controlled, operated and administered by us from our office
        in Kiev, Ukraine. We make no representation that materials at this site
        are appropriate or available for use at other locations outside of
        Ukraine and access to them from territories where their contents are
        illegal is prohibited. If you access this Site from a location outside
        of Ukraine, you are responsible for compliance with all local laws.
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2">12. GENERAL</h2>
      <h3 className="font-semibold py-1">A. Severability</h3>
      <p className="text-sm md:text-base">
        If any provision of these Terms and Conditions is held to be invalid or
        unenforceable, the provision shall be removed (or interpreted, if
        possible, in a manner as to be enforceable), and the remaining
        provisions shall be enforced. Headings are for reference purposes only
        and in no way define, limit, construe or describe the scope or extent of
        such section. Our failure to act with respect to a breach by you or
        others does not waive our right to act with respect to subsequent or
        similar breaches. These Terms and Conditions set forth the entire
        understanding and agreement between us with respect to the subject
        matter contained herein and supersede any other agreement, proposals and
        communications, written or oral, between our representatives and you
        with respect to the subject matter hereof, including any terms and
        conditions on any of customer's documents or purchase orders.
      </p>
      <h3 className="font-semibold py-1">
        B. No Joint Venture, No Derogation of Rights
      </h3>
      <p className="text-sm md:text-base">
        You agree that no joint venture, partnership, employment, or agency
        relationship exists between you and us as a result of these Terms and
        Conditions or your use of the Site. Our performance of these Terms and
        Conditions is subject to existing laws and legal process, and nothing
        contained herein is in derogation of our right to comply with
        governmental, court, and law enforcement requests or requirements
        relating to your use of the Site or information provided to or gathered
        by us with respect to such use.
      </p>

       {/* Checkbox and Buttons  */}
       <div className="flex items-center mt-5">
        <input 
        type="checkbox"
        id="terms-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2" 
        />
        <label htmlFor="terms-checkbox" className="text-sm">
          I confirm that I have read and accept the terms and conditions and privacy policy. 
        </label>
        
        </div>   
        <div className="flex justify-end items-center mt-3 space-x">
          <button
          className="text-orange-600"
          onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
          className={`px-5 py-2 rounded-md text-white ${isChecked ? 'bg-orange-600' : 'bg-gray-400'}`}
          disabled={!isChecked}
          onClick={handleAcceptClick}
          >
            Accept
          </button>
        </div>

    </div>
  );
}

export default TermsAndConditions;
