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
    Table,
    Typography,
  } from "antd";
  import PostCard from '../components/layout/PostCard.js'
  import { BlogData } from '../data/BlogData'
  import '../assets/styles/BlogSection.css'
  const { Title } = Typography;
  
  
  // table code start
  const columns = [
    
  ];
  
  const data = [
  ];
  // project table start
  
  
  function Tables() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Les Blogs partagés"
                extra={
                  <>
                    <Radio.Group onChange={onChange}  defaultValue="a">
                        
                      <Radio.Button  value="a"><a id="add-mem" href="/AjoutBlog">Ajouter un blog</a></Radio.Button>
                      
                    </Radio.Group>
                  </>
                }
              >
                
                <section className='blog-section'>
            
            <div className='blog-container'> 
                {BlogData.map((item, index) => (
                    <PostCard
                        key={index}
                        postId={item.postId}
                        name={item.text}
                        category={item.category}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
              </Card>
  
              
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Tables;
  