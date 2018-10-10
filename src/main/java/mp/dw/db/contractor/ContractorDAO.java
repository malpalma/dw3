package mp.dw.db.contractor;

import mp.dw.db.GenericDAO;

public interface ContractorDAO extends GenericDAO<Contractor, Long> {
	public Iterable<Contractor> getAll();
}
