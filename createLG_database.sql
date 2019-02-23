/*****************************************************
* Create Leadership Gwinnett tables 
* inside the btwpip_lg database on freehostia 
*****************************************************/

USE btwpip_lg;

-- create tables for the btwpip_lg database
CREATE TABLE LOGIN (
  loginID         	VARCHAR(45)		NOT NULL,
  memberID			VARCHAR(45)		NOT NULL,
  password			VARCHAR(45)		NOT NULL,
  PRIMARY KEY (loginID),
  UNIQUE INDEX login_memberID_idx (memberID)
);

CREATE TABLE MEMBER (
  memberID          VARCHAR(45)    NOT NULL,
  organizationID    INT			   NOT NULL,
  first_name        VARCHAR(45)    NOT NULL,
  last_name         VARCHAR(45)    NOT NULL,
  graduation_year	DATE,
  PRIMARY KEY (memberID),
  UNIQUE INDEX member_organizationID_idx (organizationID)
);

CREATE TABLE MEMBER_INFO (
  infoID           	INT            	NOT NULL   AUTO_INCREMENT,
  memberID        	VARCHAR(45)    	NOT NULL,
  street_address	VARCHAR(85),
  city        		VARCHAR(45),
  state         	CHAR(2) 		DEFAULT "GA",
  zip          		VARCHAR(20),
  email  			VARCHAR(45), 
  home_phone     	VARCHAR(20),           
  work_phone        VARCHAR(20),        
  mobile_phone      VARCHAR(20),      
  fax       		VARCHAR(20),             
  PRIMARY KEY (infoID), 
  UNIQUE INDEX memberInfo_memberID_idx (memberID)
);

CREATE TABLE FOCUS_AREA (
  memberID			INT            	NOT NULL,
  opportunityID     INT            	NOT NULL,
  focus_area        VARCHAR(45),          
  UNIQUE INDEX focus_memberID_idx (memberID), 
  UNIQUE INDEX focus_opportunityID_idx (opportunityID)
);

CREATE TABLE ORGANIZATION (
  organizationID    INT      		NOT NULL   AUTO_INCREMENT,
  name       		VARCHAR(45)   	NOT NULL,
  mission       	VARCHAR(255),
  type       		VARCHAR(45),
  PRIMARY KEY (organizationID)
);

CREATE TABLE ORGANIZATION_INFO (
  infoID        	INT            	NOT NULL   AUTO_INCREMENT,
  organizationID    INT   		 	NOT NULL,
  street_address 	VARCHAR(45),
  suite 			VARCHAR(10),
  city 				VARCHAR(45),
  state 			CHAR(2)			DEFAULT "GA",
  zip 				VARCHAR(20),
  main_phone		VARCHAR(20),
  alternate_phone 	VARCHAR(20),
  fax 				VARCHAR(20),
  website 			VARCHAR(150),
  email 			VARCHAR(150),
  PRIMARY KEY (infoID),
  UNIQUE INDEX organizationInfo_organizationID_idx (organizationID)
);

CREATE TABLE CONTACT (
  contactID         INT            	NOT NULL   AUTO_INCREMENT,
  organizationID    INT   		   	NOT NULL,
  last_name         VARCHAR(45),   
  first_name        VARCHAR(45),  
  email         	VARCHAR(150),   
  phone 			VARCHAR(20),
  mobile 			VARCHAR(20),
  PRIMARY KEY (contactID),
  UNIQUE INDEX contact_organizationID_idx (organizationID)
);

CREATE TABLE OPPORTUNITY (
  opportunityID     INT            	NOT NULL   AUTO_INCREMENT,
  organizationID    INT   			NOT NULL,
  type          	VARCHAR(150),   
  PRIMARY KEY (opportunityID),
  UNIQUE INDEX opportunity_organizationID_idx (organizationID)
);

CREATE TABLE LINK (
  linkID           INT            	NOT NULL   AUTO_INCREMENT,
  organizationID   INT   			NOT NULL,
  website_link     VARCHAR(150),
  PRIMARY KEY (linkID),
  UNIQUE INDEX link_organizationID_idx (organizationID)
);
