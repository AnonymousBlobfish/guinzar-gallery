import React from 'react';
import axios from 'axios';
import Gallery from '../../../lib/react-photo-gallery';
import SlideShowView from './SlideShowView';
import TopNav from './TopNav';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      siteName: '',
      photos: [],
      currentImage: 0,
      lightboxIsOpen: false,
      mainGridImages: [],
    };
    this.galleryImageCountClick = this.galleryImageCountClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  // send GET request to server on page load
  componentDidMount() {
    const context = this;
    // const id = this.state.currentSite;
    const id = window.location.href.split('/')[4];

    axios.get(`/api/restaurants/${id}/gallery`)
      .then((response) => {
        console.log('client received data from id: ', id);
        console.log(response.data);
        const photos = [];
        for (let i = 0; i < response.data.photos.length; i += 1) {
          const photo = {
            src: `http://dfvt5qu7sqzrv.cloudfront.net/${response.data.photos[i].url}`,
            width: 10,
            height: 10,
            caption: this.createCaption(response.data.photos[i]),
          };
          photos.push(photo);
        }
        context.setState({
          photos,
          siteName: response.data.name,
          mainGridImages: photos.slice(0, 8),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onGridButtonClick() {
    this.closeLightbox();
    // in future this will render Modal Grid View
  }

  createCaption(photo) {
    return (<div className="author-details">
      <div className="avatar" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/thumb/' + photo.userPic +'.jpg)'}}></div>
      <div className="name">{photo.userName}</div>
      <div className="caption">{photo.caption}</div>
    </div>);
  }

  galleryImageCountClick() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const photoCount = this.state.photos.length;
    return (
      <div id="main-app">
        <div className="gallery" >
          <TopNav />
          <Gallery
            photos={this.state.mainGridImages}
            onClick={this.openLightbox}
            columns={4}
            margin={3}
          />
          <div
            className="photo-counter"
            onClick={this.galleryImageCountClick}
            role="presentation"
          >{photoCount} PHOTOS &#43;
          </div>
        </div>
        <SlideShowView
          photos={this.state.photos}
          closeLightbox={this.closeLightbox}
          clickPrev={this.gotoPrevious}
          clickNext={this.gotoNext}
          current={this.state.currentImage}
          isLightboxOpen={this.state.lightboxIsOpen}
          placeName={this.state.siteName}
          gridButtonClick={this.onGridButtonClick}
          className="slideshow"
        />
      </div>
    );
  }
}
