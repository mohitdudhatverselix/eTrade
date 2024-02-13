import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const TopCampaign: NextPage<Props> = ({}) => {
  return <div className="header-top-campaign">
  <div className="container position-relative">
    <div className="campaign-content">
      <p>
        Open Doors To A World Of Fashion&nbsp;
        <Link href="#"> Discover More</Link>
      </p>
    </div>
  </div>
  <button className="remove-campaign">
    <i className="fal fa-times"></i>
  </button>
</div>
}

export default TopCampaign