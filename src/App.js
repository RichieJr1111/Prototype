
import React from 'react';
import YouTube from 'react-youtube';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [
        "yiSTjF2Ioro",
        "JipocCzKYpc",
        "Y1wX1k8ISng",
        "XBA8RmMbu5M",
        "dAxHNbv0B34",
        "QsPxXjiaFn4",
        "iQEDgDU1ziY",
        "0iCiakqK5SE",
      ],
      currentVideo: 'tVlcKp3bWH8',
    }
  }

  randomize = () => {
    if(this.state.videoList.length > 0)
    {
    var items = this.state.videoList
    var item = items[Math.floor(Math.random()*items.length)];




    var videoList = this.state.videoList
    
    

    console.log('video list before: ')
    console.log(videoList)
    var videoList = [...this.state.videoList]
    videoList.splice(this.state.videoList.indexOf(item), 1);

    console.log('video list after: ')
    console.log(videoList)

    this.setState({currentVideo: item, videoList: videoList})

    }
    else
    {
      this.setState({currentVideo: "gocwRvLhDf8"})
    }
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return(
      <body>
              <h1>testtesttest s</h1>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '75vh'}}>
        <iframe height = "500" width = "500" src="https://docs.google.com/document/d/e/2PACX-1vTS1Sh9cOxdykHA734DRZSSM9dR66Q26vJ6TqcHoJlgf35en2XbMiyYP9nil1q1VvvNiB5jAcNKQOQz/pub?embedded=true"></iframe>
        &emsp; {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vTS1Sh9cOxdykHA734DRZSSM9dR66Q26vJ6TqcHoJlgf35en2XbMiyYP9nil1q1VvvNiB5jAcNKQOQz/pub?embedded=true" name="myFrame"></iframe> */}
        {/* <p><a href="https://docs.google.com" target="myFrame">Open google classroom</a></p> */}
        &emsp; <YouTube videoId={this.state.currentVideo} opts={opts} onReady={this._onReady} />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
      <a target= "_blank"
        href='https://www.digipen.edu/sites/default/files/public/img/news/05-body/corey-bowen-his-magical-job-designing-magic-gathering-cards-body1.jpg'>Cards Download</a>
         &emsp; &emsp; <button onClick={this.randomize}>Randomize</button>
         &emsp; &emsp; Mission Statement goes here. Teachers Teach Teachers.
      </div>
      </body>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}