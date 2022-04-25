/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
    Row,
    Col,
    Card,
    Radio,
    Typography,
  } from "antd";
  import '../assets/styles/BlogSection.css'
  import SinglePost from "../components/layout/SinglePost";
  import { BlogData } from '../data/BlogData'
  import { useParams } from "react-router-dom";
  const { Title } = Typography;
  
  function Tables() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);
    const {postId} = useParams();
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card className="ant-card-body-7" >
              

              {BlogData.filter((item) => item.postId === postId).map((item, index) => (
                    <SinglePost
                        key={index}
                        name={item.text}
                        para={item.para}
                        image={item.image}
                    />
                ))}
                  
                
              </Card>
  
              
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Tables;
  