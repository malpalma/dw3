package mp.dw.db.user;

import mp.dw.db.GenericDAO;

public interface UserDAO extends GenericDAO<UserE, Long> {
	public Iterable<UserE> getAll();
	public Iterable<UserE> getUsersWithPerm(String perm);
	public UserE getByName(String name);
}
