
function Branding({site, page, header}) {

  return (
    <>
<div className="site-branding">
  { site.logo_img }
  <p className="site-logo">
    <a href='{ "/" | relative_url }'><img src={`header.logo_img.jpg`} alt="{ site.params.header.logo_img_alt }" /></a>
  </p>
  
  { page.layout == "home" ?
  <h1 className="site-title"><a href='{ "/" | relative_url }'>{ header.title }</a></h1>
  :
  <p className="site-title"><a href='{ "/" | relative_url }'>{ header.title }</a></p>
   }
  { header.tagline ?
  <p className="site-description">{ header.tagline }</p>
  :
  <p></p>
  }
</div>
    </>
  )
}

export default Branding
