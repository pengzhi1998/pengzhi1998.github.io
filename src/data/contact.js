import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import { fa500px } from '@fortawesome/free-brands-svg-icons/fa500px';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/pengzhi1998',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/yang.pengzhi.319/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://500px.com/p/y_marcus?view=photos',
    label: '500px',
    icon: fa500px,
  },
  {
    link: 'https://www.linkedin.com/in/%E9%B9%8F%E5%BF%97-%E6%9D%A8-751a67181/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'pengzhi1998:tyypz2590477658@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: '/files/CV-Pengzhi_Yang.pdf',
    label: 'CV',
    icon: faAddressBook,
  },
];

export default data;
