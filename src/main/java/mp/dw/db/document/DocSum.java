package mp.dw.db.document;

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

import net.bytebuddy.asm.Advice.This;

@Entity
@Table(name = "DW_DOCSUM", uniqueConstraints = {})
public class DocSum {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	@Fetch(FetchMode.JOIN)
	@JoinColumn(referencedColumnName = "id",nullable= false)
	private Document document;
	
	@Column(length = 100)
	private String taxDescr;
	
	private Float price;
	
	private Float taxValue;
	
	private Float gross;
	
	
	
	public DocSum() {}

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

	public String getTaxDescr() {
		return taxDescr;
	}

	public void setTaxDescr(String taxDescr) {
		this.taxDescr = taxDescr;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Float getTaxValue() {
		return taxValue;
	}

	public void setTaxValue(Float taxValue) {
		this.taxValue = taxValue;
	}

	public Float getGross() {
		return gross;
	}

	public void setGross(Float gross) {
		this.gross = gross;
	}

	@Override
	public boolean equals(Object other) {
		if(this == other)
			return true;
		if(!(other instanceof DocSum))
			return false;
		final DocSum otherC = (DocSum) other;
		EqualsBuilder eb = new EqualsBuilder();
		eb.append(otherC.document.getInvNo(), this.document.getInvNo());
		eb.append(otherC.document.getInvDt(), this.document.getInvDt());
		eb.append(otherC.document.getSellersName(), this.document.getSellersName());
		eb.append(otherC.document.getGross(), this.document.getGross());
		eb.append(otherC.getTaxDescr(), this.getTaxDescr());
		return eb.isEquals();
	}
	
	@Override
	public int hashCode() {
		HashCodeBuilder hcb = new HashCodeBuilder();
		hcb.append(this.document.getInvNo());
		hcb.append(this.document.getInvDt());
		hcb.append(this.document.getSellersName());
		hcb.append(this.document.getGross());
		hcb.append(this.getTaxDescr());
		return hcb.toHashCode();
	}
}
