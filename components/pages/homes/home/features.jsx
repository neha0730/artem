import bgImage from "../../../../public/assets/img/shape/shape-10.png";
import avatar from "../../../../public/assets/img/avatar/reviews.png";
import {
  ChartHistogram,
  MoneyBillWave,
  DocumentSigned,
  HandHoldingBox,
} from "react-flaticons";

const Features = () => {
  return (
    <>
      <div className="features__one section-padding">
        <div className="container">
          <div
            className="row al-center features__one-bg"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          >
            <div className="col-lg-12 lg-mb-25">
              <div className="features__one-left">
                <h4>Your Trusted CBAM Partner</h4>
                <div className="features__one-left-client lg-jc-center dark_image">
                  <img src={avatar.src} alt="client-image" />
                  <h6>12,000+ Customer Reviews</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="features__one-right lg-jc-center">
                <div className="features__one-right-item">
                  <div className="features__one-right-item-icon">
                    <ChartHistogram size="32px" />
                  </div>
                  <div className="features__one-right-item-content">
                    <h6>Guaranteed Data Integrity</h6>
                    <p>
                      We ensure that the reported emision data is accurated and
                      verifiable
                    </p>
                  </div>
                </div>
                <div className="features__one-right-item">
                  <div className="features__one-right-item-icon">
                    <MoneyBillWave size="32px" />
                  </div>
                  <div className="features__one-right-item-content">
                    <h6>Optimize Carbon Tax </h6>
                    <p>
                      Using our emission monitoring units in your production to
                      calculate your emission precisely
                    </p>
                  </div>
                </div>
                <div className="features__one-right-item">
                  <div className="features__one-right-item-icon">
                    <DocumentSigned size="32px" />
                  </div>
                  <div className="features__one-right-item-content">
                    <h6>Protect yourself against legal liability under CBAM</h6>
                    <p>
                      Distribute reporting duties and ensure correct and
                      traceable data collection at installation level
                    </p>
                  </div>
                </div>
                <div className="features__one-right-item">
                  <div className="features__one-right-item-icon">
                    <HandHoldingBox size="32px" />
                  </div>
                  <div className="features__one-right-item-content">
                    <h6>Simplify the CBAM Verification Process</h6>
                    <p>
                      Save cost and energy and make your life and the verifier’s
                      life easier!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
