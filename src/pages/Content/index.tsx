import React, {
  useState,
  useEffect,
  useCallback,
  HtmlHTMLAttributes,
} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo@1x.svg';
import { Container, Header, Main, Content, Posts } from './styles';

interface Category {
  name: string;
  description?: string;
}

interface PostType {
  title: {
    rendered: string;
  };

  excerpt?: {
    rendered: string;
  };

  content: {
    rendered: HtmlHTMLAttributes<HTMLElement>;
  };
}

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function loadContent(): Promise<void> {
      const responseCategories = await api.get('/wp/v2/categories');
      const responsePosts = await api.get('/wp/v2/posts');

      console.log(responsePosts.data);

      setCategories(responseCategories.data);
      setPosts(responsePosts.data);
    }

    loadContent();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <img src={logoImg} alt="" />

          <a id="sala-online" href="https://meet.google.com/sxn-qkep-onb">
            <FiArrowLeft size={24} color="#2fb86e" />
            <span>Voltar</span>
          </a>
        </Header>

        <Main>
          {categories.map((item) => (
            <div key={item.name} className="cards">
              <div className="card">
                <span className={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Main>

        <Posts>
          {posts.map((item) => (
            <div key={item.title.rendered} id="post">
              <h2>{item.title.rendered}</h2>
              <p id="description">descrição</p>
              <div>{item.content.rendered}</div>
            </div>
          ))}
        </Posts>
      </Content>
    </Container>
  );
};

export default Dashboard;
