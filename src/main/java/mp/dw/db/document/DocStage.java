package mp.dw.db.document;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "DW_DOCSTAGE")
public class DocStage {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@Fetch(FetchMode.JOIN)
	@JoinColumn(referencedColumnName = "id", nullable = false)
	private Document document;
	
	// "user" is restricted in postgresql
	@Column(nullable = false, length = 50)
	private String usern;
	
	@Column(nullable = false, length = 50)
	private String status;
	
	@Column(length = 50)
	private String action;
	
	@Column(nullable = false)
	private Date date;
	
	private String comments;
	
	
	
	public DocStage() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Document getDocument() {
		return document;
	}

	public void setDocument(Document document) {
		this.document = document;
	}

	public String getUsern() {
		return usern;
	}

	public void setUsern(String usern) {
		this.usern = usern;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public boolean equals(Object other) {
		if(this == other)
			return true;
		if(!(other instanceof DocStage))
			return false;
		final DocStage otherC = (DocStage) other;
		EqualsBuilder eb = new EqualsBuilder();
		eb.append(otherC.document.getInvNo(), this.document.getInvNo());
		eb.append(otherC.document.getInvDt(), this.document.getInvDt());
		eb.append(otherC.document.getSellersName(), this.document.getSellersName());
		eb.append(otherC.document.getGross(), this.document.getGross());
		eb.append(otherC.getDate(), this.getDate());
		eb.append(otherC.getUsern(), this.getUsern());
		eb.append(otherC.getAction(), this.getAction());
		return eb.isEquals();
	}
	
	@Override
	public int hashCode() {
		HashCodeBuilder hcb = new HashCodeBuilder();
		hcb.append(this.document.getInvNo());
		hcb.append(this.document.getInvDt());
		hcb.append(this.document.getSellersName());
		hcb.append(this.document.getGross());
		hcb.append(this.getDate());
		hcb.append(this.getUsern());
		hcb.append(this.getAction());
		return hcb.toHashCode();
	}
}
