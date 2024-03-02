import styles from "./MapView.module.css";

const MapView = () => {
  return (
    <div className={styles.mapView4}>
      <div className={styles.sideBar}>
        <div className={styles.searchBar}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/magnifyingglass.svg"
          />
          <div className={styles.search}>Search</div>
        </div>
        <div className={styles.showAll}>
          <div className={styles.magnifyingglassIcon}>
            <img className={styles.vectorIcon} alt="" />
            <div className={styles.checksquareChild} />
          </div>
          <div className={styles.available}>Available</div>
        </div>
        <div className={styles.showAll1}>
          <div className={styles.magnifyingglassIcon}>
            <img className={styles.vectorIcon} alt="" />
            <div className={styles.checksquareChild} />
          </div>
          <div className={styles.available}>Unavailable</div>
        </div>
        <div className={styles.showAll2}>
          <div className={styles.magnifyingglassIcon}>
            <img className={styles.vectorIcon} alt="" />
            <div className={styles.checksquareChild} />
          </div>
          <div className={styles.available}>On-leave</div>
        </div>
        <div className={styles.logo}>
          <img
            className={styles.untitledDesign11}
            alt=""
            src="/untitled-design-1-1@2x.png"
          />
          <div className={styles.search}>AquaVigil</div>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <div className={styles.pavanKumar}>Pavan kumar</div>
            <div className={styles.complaintDateContainer}>
              <span>
                <span>Complaint date -</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.span}>
                <span>04/02/2024</span>
              </span>
            </div>
          </div>
          <div className={styles.callFill0Wght400Grad0Opsz2Parent}>
            <img
              className={styles.callFill0Wght400Grad0Opsz2Icon}
              alt=""
              src="/call-fill0-wght400-grad0-opsz24-1.svg"
            />
            <div className={styles.div}>+919999999999</div>
          </div>
        </div>
        <div className={styles.showAll3}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/checksquare.svg"
          />
          <div className={styles.assign}>Show All</div>
        </div>
        <img className={styles.sideBarChild} alt="" src="/line-46.svg" />
        <img className={styles.sideBarItem} alt="" src="/line-46.svg" />
      </div>
      <div className={styles.map} />
      <div className={styles.topNavBar}>
        <div className={styles.profileWithNotificationParent}>
          <img
            className={styles.profileWithNotification}
            alt=""
            src="/profile-with-notification@2x.png"
          />
          <div className={styles.jatinChaudharyParent}>
            <div className={styles.jatinChaudhary}>Jatin Chaudhary</div>
            <div className={styles.srOfficer}>Sr. Officer</div>
          </div>
        </div>
        <div className={styles.topBar}>
          <div className={styles.topRight}>
            <div className={styles.dateCta}>
              <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
              <div className={styles.jatinChaudhary}>Wed, 23rd Dec</div>
            </div>
            <div className={styles.settings}>
              <div className={styles.funnel}>
                <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
              </div>
              <div className={styles.funnel1}>
                <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
                <div className={styles.funnelChild} />
              </div>
            </div>
          </div>
          <div className={styles.investmentParent}>
            <div className={styles.investment}>
              <div className={styles.listView}>List View</div>
            </div>
            <div className={styles.goal}>
              <div className={styles.mapView}>Map view</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.frameParent}>
        <div className={styles.categoryWrapper}>
          <div className={styles.category}>
            <div className={styles.label}>EMPLOYEE ID</div>
          </div>
        </div>
        <div className={styles.labelWrapper}>
          <div className={styles.label}>NAME</div>
        </div>
        <div className={styles.labelContainer}>
          <div className={styles.label2}>CATEGORY</div>
        </div>
        <div className={styles.labelFrame}>
          <div className={styles.label3}>Assigned location</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.label4}>STATUS</div>
        </div>
      </div>
      <div className={styles.column01Parent}>
        <div className={styles.column01}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.d}>Unavailable</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column12}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.availableParent}>
              <div className={styles.available1}>Available</div>
              <img
                className={styles.checkCircleIcon1}
                alt=""
                src="/check-circle.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column13}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.availableParent}>
              <div className={styles.available1}>Available</div>
              <img
                className={styles.checkCircleIcon1}
                alt=""
                src="/check-circle.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column14}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.onLeaveParent}>
              <div className={styles.onLeave1}>On leave</div>
              <img className={styles.errorIcon} alt="" src="/error.svg" />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column15}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.d}>Unavailable</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column16}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.d}>Unavailable</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column17}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.d}>Unavailable</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column18}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.availableParent}>
              <div className={styles.available1}>Available</div>
              <img
                className={styles.checkCircleIcon1}
                alt=""
                src="/check-circle.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column19}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.availableParent}>
              <div className={styles.available1}>Available</div>
              <img
                className={styles.checkCircleIcon1}
                alt=""
                src="/check-circle.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column20}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.column12Inner}>
            <div className={styles.availableParent}>
              <div className={styles.available1}>Available</div>
              <img
                className={styles.checkCircleIcon1}
                alt=""
                src="/check-circle.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.column21}>
          <div className={styles.name01}>
            <div className={styles.d}>10234D</div>
          </div>
          <div className={styles.name2}>
            <div className={styles.pavanKumar}>Neeraj Kumar</div>
          </div>
          <div className={styles.category01Wrapper}>
            <div className={styles.category01}>Category 01</div>
          </div>
          <div className={styles.shaheedNagarWrapper}>
            <div className={styles.shaheedNagar}>Shaheed Nagar</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.d}>Unavailable</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsInner}>
              <div className={styles.assignWrapper}>
                <div className={styles.assign}>Assign</div>
              </div>
            </div>
          </div>
          <img className={styles.dotsthreeIcon} alt="" src="/dotsthree.svg" />
        </div>
        <div className={styles.setting}>
          <div className={styles.addNewEmployeeParent}>
            <div className={styles.addNewEmployee}>
              <img
                className={styles.callFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/userplus.svg"
              />
              <div className={styles.available}>Add employee</div>
            </div>
            <div className={styles.editProfile}>
              <img
                className={styles.callFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/userminus.svg"
              />
              <div className={styles.available}>Remove employee</div>
            </div>
            <div className={styles.myTeam}>
              <img
                className={styles.callFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/pencilsimple.svg"
              />
              <div className={styles.available}>Edit profile</div>
            </div>
            <div className={styles.myTeam}>
              <img
                className={styles.callFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/trashsimple.svg"
              />
              <div className={styles.available}>Delete</div>
            </div>
            <div className={styles.myTeam}>
              <img
                className={styles.callFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/flag.svg"
              />
              <div className={styles.available}>Report</div>
            </div>
          </div>
          <img className={styles.settingChild} alt="" src="/polygon-1.svg" />
        </div>
      </div>
      <div className={styles.imageName}>
        <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
        <div className={styles.category1}>
          <div className={styles.category0111}>Category 01</div>
        </div>
      </div>
      <div className={styles.name1}>
        <div className={styles.pavanKumar}>Address</div>
        <div className={styles.plotNo205Container}>
          <p className={styles.nearBarakhambaRoad}>
            Plot no- 205, Shaheed nagar,
          </p>
          <p
            className={styles.nearBarakhambaRoad}
          >{`Near Barakhamba road. `}</p>
          <p className={styles.nearBarakhambaRoad}>Bhubhneshwar, Odissa.</p>
          <p className={styles.nearBarakhambaRoad}>Pin - 2312345</p>
        </div>
      </div>
      <div className={styles.name3}>
        <div className={styles.pavanKumar}>Description</div>
        <div className={styles.overThePast}>
          Over the past 02 days, I have been facing a series of challenges,
          including frequent power...
        </div>
      </div>
    </div>
  );
};

export default MapView;
